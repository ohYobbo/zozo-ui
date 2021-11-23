/*
 * @Author: chen
 * @Date: 2021-11-22 16:45:49
 * @LastEditTime: 2021-11-22 17:49:33
 * @Description:
 */
export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * @default info
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}
