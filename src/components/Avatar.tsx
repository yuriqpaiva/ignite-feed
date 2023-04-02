import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ src, hasBorder = true, alt="" }: AvatarProps) {
  const className = hasBorder ? styles.avatarWithBorder : styles.avatar;

  return <img src={src} className={className} alt={alt} />;
}
