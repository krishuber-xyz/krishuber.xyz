module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        2: "repeat(2, calc(50vh - 1px))",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
