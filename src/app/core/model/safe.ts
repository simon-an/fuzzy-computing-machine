// app\core\model\safe.ts
export interface Safe {
  id: string;
  value: number;
  itemSize: number;
  active: boolean;
  activeSince: Date;
  users: string[];
}
