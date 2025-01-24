import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { IconButton } from "@/components/form/Button";
import { deletePropertyAction } from "@/utils/action";
import FormContainer from "@/components/form/FormContainer";
import Title from "@/components/properties/Title";
import { Button } from "@/components/ui/button";
import AdminPropertyList from "@/components/properties/AdminPropertyList";
import SignOutLink from "@/components/navbar/SignOutLink";
function AdminPropertyPage() {
  return (
    <section>
      <div className="flex justify-between">
        <Title text="절 정보 관리" />
        <SignOutLink />
      </div>
      <div>
        <Tabs defaultValue="서울" className="mx-auto">
          <TabsList className="justify-around w-full">
            <TabsTrigger value="서울" className="text-xs">
              서울
            </TabsTrigger>
            <TabsTrigger value="부산" className="text-xs">
              부산
            </TabsTrigger>
            <TabsTrigger value="대구" className="text-xs">
              대구
            </TabsTrigger>
            <TabsTrigger value="광주/전남" className="text-xs">
              광주/전남
            </TabsTrigger>
            <TabsTrigger value="인천" className="text-xs">
              인천
            </TabsTrigger>
            <TabsTrigger value="대전/세종" className="text-xs">
              대전/세종
            </TabsTrigger>
            <TabsTrigger value="울산" className="text-xs">
              울산
            </TabsTrigger>
            <TabsTrigger value="경기" className="text-xs">
              경기
            </TabsTrigger>
            <TabsTrigger value="강원" className="text-xs">
              강원
            </TabsTrigger>
            <TabsTrigger value="충남" className="text-xs">
              충남
            </TabsTrigger>
            <TabsTrigger value="충북" className="text-xs">
              충북
            </TabsTrigger>
            <TabsTrigger value="전북" className="text-xs">
              전북
            </TabsTrigger>
            <TabsTrigger value="경남" className="text-xs">
              경남
            </TabsTrigger>
            <TabsTrigger value="경북" className="text-xs">
              경북
            </TabsTrigger>
          </TabsList>
          <TabsContent value="서울">
            <AdminPropertyList category={"서울"} />
          </TabsContent>
          <TabsContent value="부산">
            <AdminPropertyList category={"부산"} />
          </TabsContent>
          <TabsContent value="대구">
            <AdminPropertyList category={"대구"} />
          </TabsContent>
          <TabsContent value="광주/전남">
            <AdminPropertyList category={"광주/전남"} />
          </TabsContent>
          <TabsContent value="인천">
            <AdminPropertyList category={"인천"} />
          </TabsContent>
          <TabsContent value="대전/세종">
            <AdminPropertyList category={"대전/세종"} />
          </TabsContent>
          <TabsContent value="울산">
            <AdminPropertyList category={"울산"} />
          </TabsContent>
          <TabsContent value="경기">
            <AdminPropertyList category={"경기"} />
          </TabsContent>
          <TabsContent value="강원">
            <AdminPropertyList category={"강원"} />
          </TabsContent>
          <TabsContent value="충남">
            <AdminPropertyList category={"충남"} />
          </TabsContent>
          <TabsContent value="충북">
            <AdminPropertyList category={"충북"} />
          </TabsContent>
          <TabsContent value="전북">
            <AdminPropertyList category={"전북"} />
          </TabsContent>
          <TabsContent value="경남">
            <AdminPropertyList category={"경남"} />
          </TabsContent>
          <TabsContent value="경북">
            <AdminPropertyList category={"경북"} />
          </TabsContent>
        </Tabs>
      </div>
      <Link href={"/admin/create"} passHref>
        <Button className="w-full mt-2" size={"lg"}>
          등록하기
        </Button>
      </Link>
    </section>
  );
}

export default AdminPropertyPage;

function DeletePackage({ packageId }: { packageId: string }) {
  const deleteProduct = deletePropertyAction.bind(null, { packageId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
