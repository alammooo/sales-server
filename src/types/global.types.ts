export interface GetAccreditationMenuServices {
  roleId?: number | null;
  isAdmin: boolean;
}

type UnitMenu = (
  | never
  | {
      id: number;
      name: string;
      subUnits: SubUnitMenu;
    }
)[];

type SubUnitMenu = (
  | never
  | {
      id: number;
      name: string;
      criterias: CriteriaMenu;
    }
)[];

type CriteriaMenu = (
  | never
  | {
      id: number;
      name: string;
      evaluations: EvaluasiMenu;
    }
)[];

type EvaluasiMenu = (
  | never
  | {
      id: number;
      name: string;
      subEvaluations: SubEvaluasiMenu;
    }
)[];

type SubEvaluasiMenu = (
  | never
  | {
      id: number;
      name: string;
    }
)[];

export type Menus = {
  id: number;
  name: string;
  units: UnitMenu;
}[];

export interface CreateRoleUnitService {
  roleId: number;
  unitIds: number[];
  userId: number;
}
