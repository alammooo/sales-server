import prisma from '@/config/prisma';
import { CreateRoleUnitService, GetAccreditationMenuServices, Menus } from '@/types/global.types';

export const getAccreditationMenuServices = async ({
  roleId,
  isAdmin,
}: GetAccreditationMenuServices) => {
  if (!roleId) return [];
  let whereUnit = {};
  let whereSubUnit = {};
  if (!isAdmin) {
    const roleUnit = await prisma.roleUnit.findMany({
      select: { unitId: true },
      where: { roleId },
    });
    const unitIds = roleUnit.map((el) => el.unitId);
    whereUnit = { id: { in: unitIds } };
    whereSubUnit = { unitId: { in: unitIds } };
  }
  const units = await prisma.unit.findMany({
    select: { id: true, name: true, organizationId: true },
    where: whereUnit,
  });
  let whereOrg = {};
  if (!isAdmin) {
    const organizationIds = units.map((el) => el.organizationId);
    whereOrg = { id: { in: organizationIds } };
  }
  const organizations = await prisma.organization.findMany({
    select: { id: true, name: true },
    where: whereOrg,
  });

  const subUnits = await prisma.subUnit.findMany({
    select: { id: true, name: true, unitId: true },
    where: whereSubUnit,
  });

  const whereCriteria = { subUnitId: { in: subUnits.map((el) => el.id) } };

  const criterias = await prisma.criteria.findMany({
    select: { id: true, name: true, subUnitId: true },
    where: whereCriteria,
  });

  const whereEvaluasi = { criteriaId: { in: criterias.map((el) => el.id) } };

  const evaluations = await prisma.element.findMany({
    select: { id: true, name: true, criteriaId: true },
    where: whereEvaluasi,
  });

  const whereSubEvaluasi = { elementId: { in: evaluations.map((el) => el.id) } };

  const subEvaluations = await prisma.subElement.findMany({
    select: { id: true, name: true, elementId: true },
    where: whereSubEvaluasi,
  });

  const menus: Menus = [];
  organizations.forEach((organization) => {
    const organizationObj: Menus[0] = {
      id: organization.id,
      name: organization.name,
      units: [],
    };
    units.forEach((unit) => {
      const unitObj: Menus[0]['units'][0] = {
        id: unit.id,
        name: unit.name,
        subUnits: [],
      };
      subUnits.forEach((subUnit) => {
        const subUnitObj: Menus[0]['units'][0]['subUnits'][0] = {
          id: subUnit.id,
          name: subUnit.name,
          criterias: [],
        };
        criterias.forEach((criteria) => {
          const criteriaObj: Menus[0]['units'][0]['subUnits'][0]['criterias'][0] = {
            id: criteria.id,
            name: criteria.name,
            evaluations: [],
          };
          evaluations.forEach((evaluation) => {
            const evaluasiObj: Menus[0]['units'][0]['subUnits'][0]['criterias'][0]['evaluations'][0] =
              {
                id: evaluation.id,
                name: evaluation.name,
                subEvaluations: [],
              };
            subEvaluations.forEach((subEvaluation) => {
              const subEvaluationObj: Menus[0]['units'][0]['subUnits'][0]['criterias'][0]['evaluations'][0]['subEvaluations'][0] =
                {
                  id: subEvaluation.id,
                  name: subEvaluation.name,
                };
              if (subEvaluation.elementId === evaluasiObj.id) {
                evaluasiObj.subEvaluations.push(subEvaluationObj);
              }
            });
            if (evaluation.criteriaId === criteriaObj.id) {
              criteriaObj.evaluations.push(evaluasiObj);
            }
          });
          if (criteria.subUnitId === subUnitObj.id) {
            subUnitObj.criterias.push(criteriaObj);
          }
        });
        if (subUnit.unitId === unitObj.id) {
          unitObj.subUnits.push(subUnitObj);
        }
      });
      if (unit.organizationId === organizationObj.id) {
        organizationObj.units.push(unitObj);
      }
    });
    menus.push(organizationObj);
  });

  return menus;
};

export const createRoleUnitService = async ({ roleId, unitIds, userId }: CreateRoleUnitService) => {
  if (!unitIds.length) {
    await prisma.roleUnit.deleteMany({ where: { roleId } });
  } else {
    const [{ dbUnitIds }] = await prisma.$queryRaw<{ dbUnitIds: number[] }[]>`
      SELECT COALESCE(array_remove(array_agg(ru.unit_id), NULL),'{}') AS "dbUnitIds"
      FROM role_unit ru
      WHERE ru.role_id = ${roleId}
    `;

    const createUnitIds = unitIds.filter((bodyUnitId) => !dbUnitIds.includes(bodyUnitId));
    const deleteUnitIds = dbUnitIds.filter((dbUnitId) => !unitIds.includes(dbUnitId));

    if (deleteUnitIds.length) {
      await prisma.roleUnit.deleteMany({ where: { roleId, unitId: { in: deleteUnitIds } } });
    }

    if (createUnitIds.length) {
      const createData = createUnitIds.map((unitId) => ({
        roleId,
        unitId,
        createdBy: userId,
        updatedBy: userId,
      }));
      await prisma.roleUnit.createMany({ data: createData });
    }
  }
};
