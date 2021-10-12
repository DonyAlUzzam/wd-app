import cx from "classnames";

interface GapProps {
  height?: string;
  width?: string;
}

export default function Gap(props: GapProps) {
  const { height, width } = props;

  const GapClass = cx({
    [`${width}`]: width !== undefined,
    [`${height}`]: height !== undefined,
  });

  return <div className={GapClass} />;
}

Gap.defaultProps = {
  height: undefined,
  width: undefined,
};
