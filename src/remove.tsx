/**
 * @license
 * Copyright (C) 2016 Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import * as React from "react";

export interface RemoveAtttributes {
  id: string | string[];
}

export interface RemoveProps extends
  RemoveAtttributes,
  React.ClassAttributes<Remove> { }

/**
 * Remove deletes elements with given id upon mount from the DOM.
 */
export class Remove extends React.PureComponent<RemoveProps, {}> {
  public componentDidMount(): void {
    if (Array.isArray(this.props.id)) {
      (this.props.id as string[]).map(
        (id: string) => this.removeElementWithID(id),
      );
      return;
    }
    this.removeElementWithID(this.props.id);
  }
  public render(): React.ReactElement<any> {
    return null;
  }
  private removeElementWithID(id: string): void {
    let el = document.getElementById(id);
    if (el) {
      el.remove();
    }
  }
}
