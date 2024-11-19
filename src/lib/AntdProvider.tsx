import { ConfigProvider } from "antd";

function AntdProvider({ children }: { children: React.ReactNode }) {
  const primaryColor = "#3182ce";
  const bgColor = "rgb(255, 255, 255)";

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
        components: {
          Table: {
            headerBg: bgColor,
            headerColor: primaryColor,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdProvider;
