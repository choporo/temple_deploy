import { deletePropertyAction, fetchProperties } from "@/utils/action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import Title from "./Title";
import Link from "next/link";
import { IconButton } from "../form/Button";
import FormContainer from "../form/FormContainer";

async function AdminPropertyList({ category }: { category: string }) {
  const items = await fetchProperties({ category });
  return (
    <div>
      <Table className="text-xs">
        <TableCaption className="text-start">총 {items.length}건</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">사찰명</TableHead>
            <TableHead className="text-center">타이틀</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const { id: propertyId, name, title } = item;
            return (
              <TableRow key={propertyId} className="text-center">
                <TableCell>{name}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell className="flex items-center justify-center">
                  <Link href={`/admin/${propertyId}/edit`}>
                    <IconButton actionType="edit"></IconButton>
                  </Link>
                  <DeletePackage packageId={propertyId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
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
