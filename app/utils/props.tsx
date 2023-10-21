export type ButtonProps = {
    children: JSX.Element;
    type: 'primary' | 'secondary';
    handleClick?: () => void;
};

export type LayoutProps = {
    children: JSX.Element;
};

export type InnovationCardProps = {
    imgUrl?: string;
    title?: string;
    description?: string;
};
