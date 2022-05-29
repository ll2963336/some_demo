// i18n
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      // Will be passed to the page component as props
    },
  };
}

const Cls = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t("home:welcome_msg")}</div>
    </div>
  );
};
export default Cls;
