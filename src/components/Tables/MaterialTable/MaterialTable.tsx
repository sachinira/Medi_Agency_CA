/*
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein is strictly forbidden, unless permitted by WSO2 in accordance with
 * the WSO2 Commercial License available at http://wso2.com/licenses.
 * For specific language governing the permissions and limitations under
 * this license, please see the license as well as any agreement you’ve
 * entered into with WSO2 governing the purchase of this software and any
 * associated services.
 */
import React, { forwardRef } from "react";
import { SortDirection } from "@mui/material";
import { ArrowDropDown, ChevronLeft, ChevronRight } from "@mui/icons-material";
import MaterialTable, { MTableBodyRow } from "@material-table/core";

export interface TableProps {
  list: any[];
  tableColumns: any[];
  handleCustomSort?: (orderBy: number, orderDirection: SortDirection) => void;
  handlePageNumberChange?: (page: number, pageSize: number) => void;
  toggleHover: (event: any, rowProps: any) => void;
  mouseLeaveMoreButton: (event: any) => void;
  rowsPerPage?: number;
  setRowsPerPage?: (pageSize: number) => void;
  pageNumber?: number;
}

export default function Table(props: TableProps) {
  const {
    list,
    tableColumns,
    rowsPerPage,
    pageNumber,
    handleCustomSort,
    setRowsPerPage,
    handlePageNumberChange,
    toggleHover,
    mouseLeaveMoreButton,
  } = props;

  return (
    <>
      <MaterialTable
        onOrderChange={handleCustomSort}
        options={{
          pageSize: rowsPerPage,
          showFirstLastPageButtons: false,
          thirdSortClick: false,
          pageSizeOptions: Array.from(Array(15).keys()),
        }}
        columns={tableColumns}
        icons={{
          SortArrow: forwardRef((prop, ref) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ArrowDropDown {...prop} />
          )),
          NextPage: forwardRef((prop, ref) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ChevronRight {...prop}  />
          )),
          PreviousPage: forwardRef((prop, ref) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ChevronLeft {...prop} />
          )),
        }}
        title=""
        data={list}
        localization={{
          pagination: {
            nextTooltip: "Next",
            previousTooltip: "Previous",
          },
        }}
        components={{
          Row: (rowProps) => (
            <MTableBodyRow
              onMouseEnter={(event: any) => {
                toggleHover(event, rowProps);
              }}
              onMouseLeave={(event: any) => {
                mouseLeaveMoreButton(event);
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rowProps}
            />
          ),
        }}
      />
    </>
  );
}
