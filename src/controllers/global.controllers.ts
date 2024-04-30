import { createRoleUnitService, getAccreditationMenuServices } from '@/services/global.services';
import { ExpressFc } from '@/types';
import { createRoleUnitValidator } from '@/validators/global.validators';

export const getAccreditationMenuController: ExpressFc = async (req, res, next) => {
  try {
    const { user } = req;
    const result = await getAccreditationMenuServices({
      roleId: user.roleId,
      isAdmin: user.isAdmin,
    });
    res.status(200).json({ message: 'success get menus', data: result });
  } catch (error) {
    next(error);
  }
};

export const createRoleUnitController: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await createRoleUnitValidator.validate(req);
    // await createRoleUnitService({
    //   roleId: body.roleId,
    //   unitIds: body.unitIds,
    //   userId: req.user.id,
    // });
    res.status(201).json({ message: 'success handle role unit' });
  } catch (error) {
    next(error);
  }
};
