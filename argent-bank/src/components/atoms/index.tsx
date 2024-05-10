import "./atoms.css";

export interface AtomProps {
    variant?: "h1" | "h2" | "lead" | "body-xl" | "body-lg" | "body-base" | "body-sm" | "body-md" | "body-xs";
    theme?: "red" | "grey" | "white" | "black";
    align?: "left" | "center" | "right";
    fontWeight?: "light" | "normal" | "bold";
    className?: string;
}

const variantStyles: Map<string | undefined, string> = new Map()
variantStyles.set("h1", "text_5xl")
variantStyles.set("lead", "text_xxl")
variantStyles.set("body-xl", "text_xl")
variantStyles.set("body-lg", "text_lg")
variantStyles.set("body-md", "text_md")
variantStyles.set("body-sm", "text_sm") // default
variantStyles.set("body-xs", "text_xs")

const colorStyles: Map<string | undefined, string> = new Map()
colorStyles.set("red", "text_red")
colorStyles.set("white", "text_white")
colorStyles.set("black", "text_black") // default
colorStyles.set("grey", "text_grey")

const fontWeightStyles: Map<string | undefined, string> = new Map()
fontWeightStyles.set("light", "font_light")
fontWeightStyles.set("normal", "font_normal") // default
fontWeightStyles.set("bold", "font_bold")

const alignStyles: Map<string | undefined, string> = new Map()
alignStyles.set("left", "text_left") // default
alignStyles.set("center", "text_center")
alignStyles.set("right", "text_right")

const getStyleClassname = (
    variant: string | undefined,
    color: string | undefined,
    align: string | undefined,
    fontWeight: string | undefined,
    classNames: Array<string>
): string => [variantStyles.get(variant), colorStyles.get(color), fontWeightStyles.get(fontWeight), alignStyles.get(align), ... (typeof classNames === "string" ? classNames : classNames)].filter(f => f).join(' ')

const useAtom = ({
    variant = "body-sm",
    theme = "black",
    align = "left",
    fontWeight = "normal",
    className = "",
}: AtomProps) => {
    return ({
        className: getStyleClassname(variant, theme, align, fontWeight, className.split(" "))
    })
}

export default useAtom