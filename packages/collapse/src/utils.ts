/* eslint-disable no-param-reassign */
/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
const trimArr = function (s: string) {
  return (s || '').split(' ').filter(item => !!item.trim());
};

export function removeClass(el: HTMLElement | Element, cls: string): void {
  if (!el || !cls) return;
  const classes = trimArr(cls);
  let curClass = el.getAttribute('class') || '';

  if (el.classList) {
    el.classList.remove(...classes);
    return;
  }
  classes.forEach(item => {
    curClass = curClass.replace(` ${item} `, ' ');
  });
  const className = trimArr(curClass).join(' ');
  el.setAttribute('class', className);
}

/* istanbul ignore next */
export function addClass(el: HTMLElement | Element, cls: string): void {
  if (!el) return;
  let className = el.getAttribute('class') || '';
  const curClass = trimArr(className);
  const classes = (cls || '').split(' ').filter(item => !curClass.includes(item) && !!item.trim());

  if (el.classList) {
    el.classList.add(...classes);
  } else {
    className += ` ${classes.join(' ')}`;
    el.setAttribute('class', className);
  }
}

export const collapseMotion = emit => ({
  css: true,
  onBeforeEnter: el => {
    addClass(el, 'collapse-transition');
    if (!el.dataset) el.dataset = {};
    el.style.height = '0px';
    // el.style.maxHeight = '0px';
  },
  onEnter: el => {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
      el.style.maxHeight = `${el.scrollHeight}px`;
    } else {
      el.style.height = '0px';
    }
    el.style.overflow = 'hidden';
  },
  onAfterEnter: el => {
    el.style.height = '';
    el.style.maxHeight = '';
    el.style.overflow = el.dataset.oldOverflow;
    removeClass(el, 'collapse-transition');
    emit('before-enter');
  },
  onBeforeLeave: el => {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = `${el.scrollHeight}px`;
    el.style.maxHeight = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },
  onLeave: el => {
    if (el.scrollHeight !== 0) {
      addClass(el, 'collapse-transition');
      el.style.transitionProperty = 'height';
      el.style.height = '0px';
    }
  },
  onAfterLeave: el => {
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.maxHeight = '';
    el.style.overflow = el.dataset.oldOverflow;
    emit('after-leave');
  },
});
