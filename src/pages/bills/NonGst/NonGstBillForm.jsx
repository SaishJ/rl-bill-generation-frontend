import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { selectNongst } from "@/features/bill/billSelectors";
import {
  addNongstItem,
  removeNongstItem,
  updateNongstField,
  updateNongstItem,
} from "@/features/bill/billSlice";
import { Textarea } from "@/components/ui/textarea";
import { FieldArray, Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const NonGstBillForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectNongst);

  return (
    <div>
      <Formik
        initialValues={formData}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, setFieldValue }) => {
          const handleChangeValue = (field, value) => {
            dispatch(
              updateNongstField({
                field: field,
                value: value,
              })
            );
            setFieldValue(field, value);
          };

          const handleDescriptionValue = (index, field, value) => {
            dispatch(
              updateNongstItem({
                index: index,
                field: field,
                value: value,
              })
            );
            setFieldValue(`items.${index}.field`, value);
          };

          return (
            <Form className="flex flex-col gap-3">
              <Input
                placeholder="Enter name"
                value={values.name}
                onChange={(e) => handleChangeValue("name", e.target.value)}
              />
              <Textarea
                placeholder="Enter address"
                value={values.address}
                onChange={(e) => handleChangeValue("address", e.target.value)}
              />
              <Input
                placeholder="Enter invoice number"
                value={values.invoice_no}
                onChange={(e) =>
                  handleChangeValue("invoice_no", e.target.value)
                }
                type="number"
              />
              <Input
                placeholder="Enter venue"
                value={values.venue}
                onChange={(e) => handleChangeValue("venue", e.target.value)}
              />
              <div className="flex flex-row items-center gap-2 my-2">
                <Checkbox
                  checked={formData?.autoCalculate}
                  onCheckedChange={(value) =>
                    handleChangeValue("autoCalculate", value)
                  }
                />
                <Label className="font-normal">
                  Auto calculate amount and total amount
                </Label>
              </div>
              <FieldArray name="items">
                {({ push, remove }) => (
                  <>
                    {values.items?.map((_, index) => (
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-2">
                          <Input
                            placeholder="Enter description"
                            value={values.items.description}
                            onChange={(e) =>
                              handleDescriptionValue(
                                index,
                                `description`,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <Input
                          placeholder="Enter qty."
                          value={values.items.qty}
                          type="number"
                          onChange={(e) =>
                            handleDescriptionValue(index, `qty`, e.target.value)
                          }
                        />
                        <Input
                          placeholder="Enter rate"
                          value={values.items.rate}
                          type="number"
                          onChange={(e) =>
                            handleDescriptionValue(
                              index,
                              `rate`,
                              e.target.value
                            )
                          }
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="cursor-pointer"
                          onClick={() => {
                            remove(index);
                            dispatch(removeNongstItem(index));
                          }}
                        >
                          <Trash2Icon />
                        </Button>
                      </div>
                    ))}
                    <Button
                      className="bg-neutral-700 cursor-pointer"
                      onClick={() => {
                        push({
                          description: "",
                          qty: "",
                          rate: "",
                          amount: "",
                        });
                        dispatch(addNongstItem());
                      }}
                    >
                      Add New Field
                    </Button>
                  </>
                )}
              </FieldArray>
              <Input
                placeholder="Enter amount (optional)"
                value={values.extraAmount}
                onChange={(e) =>
                  handleChangeValue("extraAmount", e.target.value)
                }
                type="number"
                disabled={formData?.autoCalculate}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default NonGstBillForm;
