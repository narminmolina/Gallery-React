interface LikeIconProps {
  favorited?: boolean;
}

export const LikeIcon = ({ favorited }: LikeIconProps) => {
  const style = {
    fill: favorited ? 'var(--red)' : ' ',
    stroke: favorited ? 'var(--red)' : 'var(--light-gray)',
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--light-gray)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className="likeIcon"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
};
