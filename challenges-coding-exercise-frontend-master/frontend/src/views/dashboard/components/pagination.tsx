import React from 'react';
import {Button} from 'components/buttons';
import { Paginate } from '../style';

interface PaginationProps {
    pageNumber: number,
    pageSize: number,
    totalSize: number,
    handleButtonClick : (buttonNumber: number) => void
}

export const Pagination = (props: PaginationProps) => {
    const { totalSize, pageSize, pageNumber, handleButtonClick } = props;
    const totalCount = Math.ceil(totalSize / pageSize);
    const button:any[] = [];
    for(let x = 1; x <= totalCount; x++){
        if (pageNumber === x){
          button.push(
            <Button active={true}>
              {x}
            </Button>
          ) 
        } else {
          button.push(
            <Button         
              onClick={() => handleClick(x)}
            >
              {x}
            </Button>
          )
        }
      }

    const handleClick = (prosectivePageNumber: number) => {
        if (!(prosectivePageNumber === 0  || (prosectivePageNumber > totalCount))){
          handleButtonClick(prosectivePageNumber)
        }
    }
    return (
        <Paginate>
            {button}
        </Paginate>
    )
}

