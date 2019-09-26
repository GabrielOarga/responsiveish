import React, { useState } from 'react';

import Category from './Category';

import './style.less';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sectionRef, setSectionRef] = useState(React.createRef());

  return (
    <>
      <div id={'collapse-trigger'} onClick={
        () => {
          console.log('cilcked', collapsed);

          if(collapsed) {
            expandSection(sectionRef.current);
          } else {
            collapseSection(sectionRef.current);
          }

          setCollapsed(!collapsed)
        }
      }
      />
      <section className={'sidebar'} ref={sectionRef}>
        <Category className={'filter-category'}>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
        </Category>
        <Category className={'filter-category'}>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
        </Category>
        <Category className={'filter-category'}>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
        </Category>
        <Category className={'filter-category'}>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
        </Category>
        <Category className={'filter-category'}>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
          <div className={'filter'}>fitler 1</div>
          <div className={'filter'}>fitler 2</div>
          <div className={'filter'}>fitler 3</div>
          <div className={'filter'}>fitler 4</div>
        </Category>
      </section>
    </>
  )
};

const collapseSection = (section) => {
  const sectionHeight = section.scrollHeight;

  const sectionTransition = section.style.transition;
  section.style.transition = '';

  requestAnimationFrame(() => {
    section.style.height = sectionHeight + 'px';
    section.style.transition = sectionTransition;

    requestAnimationFrame(() => {
      section.style.height = 0 + 'px';
    });
  });
};

const expandSection = (element) => {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function recursion(e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', recursion);

    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = null;
  });

  // mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'false');
};

export default Sidebar;