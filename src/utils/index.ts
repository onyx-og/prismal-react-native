export * from "./colors";
export type Elevation = 0 | 1 | 2 | 3 | 4 // | 5
export const setElevation = (className: string, elevation: Elevation = 0 ) => {
    let _className = `${className}  elevation-${
        elevation < 6 ? elevation : 5
    }`
    return _className;
}
export const getBoxElevation = (
    elevation: Elevation = 0
) => {
    let boxShadow = "0";

    switch(elevation) {
        case 0:
           boxShadow = "0"
        //    _style['--box-elevation-hover'] = "0"
            break;
        case 1:
           boxShadow = "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px";
        //    _style['--box-elevation-hover'] = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
           break;
        case 2:
           boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        //    _style['--box-elevation-hover'] = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
           break;
        case 3:
           boxShadow = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        //    _style['--box-elevation-hover'] = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
           break;
        case 4:
           boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
        //    _style['--box-elevation-hover'] = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
           break;
        // case 5:
        //    boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
        //    break;
        default:
            boxShadow = "0";
    }

    return boxShadow;
}
export type BorderRadius = "none" | "extra-small" | "small" | "medium" 
    | "large" | "extra-large" | "full";

export const getBorderRadius = (
    borderRadius: BorderRadius = "extra-small"
) => {
    let _borderRadius: string;

    switch(borderRadius) {
        case "none":
            _borderRadius = "0"
        break;
        case "extra-small":
            _borderRadius = ".25rem"
        break;
        case "small":
            _borderRadius = ".5rem"
        break;
        case "medium":
            _borderRadius = ".5rem"
        break;
        case "large":
            _borderRadius = ".75rem"
        break;
        case "extra-large":
            _borderRadius = "1rem"
        break;
        case "full":
            _borderRadius = "2.5rem"
        break;
    }
    return _borderRadius;
}