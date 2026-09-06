"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function MovieCard({ title, year, rating, poster }) {
  return (
    <Card className="w-full max-w-xs overflow-hidden">
      <div className="relative h-50 w-full ">
        <Image src={poster} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="space-y-2 p-4">
        <h3 className="truncate text-lg font-semibold">{title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{year}</span>
          <span>⭐ {rating}</span>
        </div>
      </CardContent>
    </Card>
  );
}
