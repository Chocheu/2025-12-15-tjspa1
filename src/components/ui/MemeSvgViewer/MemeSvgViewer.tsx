import styles from "./MemeSvgViewer.module.css";

interface IMemeSvgViewerProps {
  children?: React.ReactNode;
}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = ({
  children = "MemeSvgViewer Component",
}) => {
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      {children}
    </div>
  );
};

export default MemeSvgViewer;
