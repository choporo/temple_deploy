"use client";
import {
  deletePropertyAction,
  fetchAdminProperties,
  fetchProperties,
} from "@/utils/action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { IconButton } from "../form/Button";
import FormContainer from "../form/FormContainer";
import { useEffect, useState } from "react";
import { AdminProps } from "@/utils/types";
import PaginationSection from "./PaginationSection";

function AdminPropertyList({ category }: { category?: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [posts, setPosts] = useState<AdminProps[]>([]);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = posts.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    const fetchData = async () => {
      const properties: AdminProps[] = await fetchAdminProperties({ category });
      setPosts(properties);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Table className="text-xs">
        <TableCaption className="text-start">총 {posts.length}건</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">사찰명</TableHead>
            {/* <TableHead className="text-center">타이틀</TableHead> */}
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item) => {
            const { id: propertyId, name } = item;
            return (
              <TableRow key={propertyId} className="text-center">
                <TableCell>{name}</TableCell>
                {/* <TableCell>{title}</TableCell> */}
                <TableCell className="flex items-center justify-center">
                  <Link href={`/admin/${propertyId}/edit`} passHref>
                    <IconButton actionType="edit"></IconButton>
                  </Link>
                  <DeletePackage packageId={propertyId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="my-5">
        <PaginationSection
          totalItems={posts.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default AdminPropertyList;

function DeletePackage({ packageId }: { packageId: string }) {
  const deleteProduct = deletePropertyAction.bind(null, { packageId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
