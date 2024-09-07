import { Layout } from "../../components/Layout/Layout";
import { NewListContainer } from "../../components/NewListContainer/NewListContainer";
import { PageTitle } from "../../components/PageTitle/PageTitle";

const NewList = () => {
  return (
    <Layout>
      <PageTitle title="Nova Lista" />
      <NewListContainer/>
    </Layout>
  );
};

export default NewList;