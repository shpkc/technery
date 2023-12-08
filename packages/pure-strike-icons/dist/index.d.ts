declare module '*.svg' {
  const content: string
  export default content
}

export declare type IconSource = React.FunctionComponent<React.SVGProps<SVGSVGElement>>
export declare type BezierIcon = IconSource & { __bezier__icon: true }

export declare function isBezierIcon(arg: unknown): arg is BezierIcon
export declare function createBezierIcon(icon: IconSource): BezierIcon

export declare type IconName = 'arrow_down' | 'arrow_up' | 'check_box_off' | 'close' | 'error' | 'menu' | 'search' | 'view'
/**
 * @deprecated If you import this module, all icons are bundled, so please import and use the individual icons.
 * @example
 * import { AllIcon } from '@channel.io/bezier-icons'
 */
export declare const icons: Record<IconName, BezierIcon>

export declare const ArrowDownIcon: BezierIcon
export declare const ArrowUpIcon: BezierIcon
export declare const CheckBoxOffIcon: BezierIcon
export declare const CloseIcon: BezierIcon
export declare const ErrorIcon: BezierIcon
export declare const MenuIcon: BezierIcon
export declare const SearchIcon: BezierIcon
export declare const ViewIcon: BezierIcon