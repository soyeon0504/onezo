import { Pagination } from "antd";
import styled from "@emotion/styled";

export const PaginationOrange = styled(Pagination)`
  .ant-pagination-item-active {
    border-color: #FF8B38;
    background-color: #FF8B38;
  }
  .ant-pagination-item-active a {
    color: #fff;
  }
  .ant-pagination-item-active:hover {
    border-color: #FF8B38;
    background-color: #FF8B38;
  }
  .ant-pagination-item-active a:hover {
    color: #fff;
  }
  .ant-pagination-options {
    display: none;
  }
`;