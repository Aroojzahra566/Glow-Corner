"use client";

import { Button } from "./Button";
import { useToast } from "./Toast";

export function AddToCartButton() {
  const { addToast } = useToast();
  return (
    <Button
      type="button"
      onClick={() => addToast("Product added to cart successfully", "success")}
    >
      Add to Cart
    </Button>
  );
}
