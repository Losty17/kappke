interface IUnderlineProps {
  width: string;
}
const Underline: React.FC<IUnderlineProps> = ({ width }) => {
  const underline = {
    margin: "5px",
    marginLeft: 0,
    width: width,
    height: "3px",
    background: "#FDF2F8",
    borderRadius: "6px",
  };

  return <div style={underline} />;
};

export default Underline;
