import React from 'react';
import {ChildrenWrapper, ChildrenInnerLine, ChildrenInnerLineDiv, ChildrenInnerLineSpan, ChildrenInnerLineDropDown, ChildrenInnerLineDropDownField, ChildrenInnerLineDropDownIcon} from './ChildrenStyles.js';

import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Children = ({ childrenNumber }) => {
  const rows = [];
  for(let i = 1; i <= childrenNumber; i++) {
    rows.push(
      <ChildrenInnerLine key={i}>
        <ChildrenInnerLineDiv>
          <ChildrenInnerLineSpan>{`Child${i}`}</ChildrenInnerLineSpan>
          <ChildrenInnerLineDropDown>
            <ChildrenInnerLineDropDownField>10</ChildrenInnerLineDropDownField>
            <ChildrenInnerLineDropDownIcon>
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </ChildrenInnerLineDropDownIcon>
          </ChildrenInnerLineDropDown>
        </ChildrenInnerLineDiv>
      </ChildrenInnerLine>
    );
  }

  return (
    <ChildrenWrapper>
      {rows}
    </ChildrenWrapper>
  );
};

export default Children;