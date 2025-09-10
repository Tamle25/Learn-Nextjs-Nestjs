"use client";
import { Layout } from "antd";
const AdminFooter = () => {
  const { Footer } = Layout;
  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Zunx
      </Footer>
    </>
  );
};

export default AdminFooter;
