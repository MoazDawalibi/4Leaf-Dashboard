import { TableProps } from "antd";

export interface PaginationMeta {
  current_page: number;
  per_page: number;
  total: number;
}

export interface ResponseData {
  data: any[];
  meta: PaginationMeta;
}

export interface Response {
  data: ResponseData;
  isLoading: boolean;
}

export interface DataTableProps extends TableProps {
  response: any;
  useColumns: any;
  dataSource?: any;
  [key: string]: any;
}
export interface PaginationAntd {
  current: number;
  pageSize: number;
  total: number;
}
