import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { selectGst } from "@/features/bill/billSelectors";
import {
  addGstItem,
  removeGstItem,
  updateGstField,
  updateGstItem,
} from "@/features/bill/billSlice";
import { FieldArray, Form, Formik } from "formik";
import { Trash2Icon } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const GstBillForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectGst);

  return (
    <div>
      <Formik
        initialValues={formData}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, setFieldValue }) => {
          const handleChangeValue = (field, value) => {
            dispatch(
              updateGstField({
                field: field,
                value: value,
              })
            );
            setFieldValue(field, value);
          };

          const handleDescriptionValue = (index, field, value) => {
            dispatch(
              updateGstItem({
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
                placeholder="Enter GST Tin Number"
                value={values.gst_tin_no}
                onChange={(e) =>
                  handleChangeValue("gst_tin_no", e.target.value)
                }
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
                placeholder="Enter date"
                value={values.date}
                onChange={(e) => handleChangeValue("date", e.target.value)}
              />
              <Input
                placeholder="Enter state code"
                value={values.state_code}
                onChange={(e) =>
                  handleChangeValue("state_code", e.target.value)
                }
                type="number"
              />
              <Input
                placeholder="Enter venue"
                value={values.venue}
                onChange={(e) => handleChangeValue("venue", e.target.value)}
              />
              <Input
                placeholder="Enter event date"
                value={values.event_date}
                onChange={(e) =>
                  handleChangeValue("event_date", e.target.value)
                }
              />
              <Input
                placeholder="Enter GST percentage"
                value={values.gst_percentage}
                onChange={(e) =>
                  handleChangeValue("gst_percentage", e.target.value)
                }
              />
              <div className="flex flex-row items-center gap-2 my-2">
                <Checkbox
                  checked={formData?.autoCalculate}
                  onCheckedChange={(value) =>
                    handleChangeValue("autoCalculate", value)
                  }
                />
                <Label className="font-normal">
                  Auto calculate amount (price x quantity)
                </Label>
              </div>
              <FieldArray name="items">
                {({ push, remove }) => (
                  <>
                    {values.items.map((_, index) => (
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
                            dispatch(removeGstItem(index));
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
                          hsn: "",
                          qty: "",
                          rate: "",
                          amount: "",
                        });
                        dispatch(addGstItem());
                      }}
                    >
                      Add New Field
                    </Button>
                  </>
                )}
              </FieldArray>
              <Input
                placeholder="Enter HSN"
                value={values?.items?.hsn}
                onChange={(e) =>
                  handleDescriptionValue(0, `hsn`, e.target.value)
                }
                disabled={!values.items.length}
              />
              <Input
                placeholder="Enter amount"
                value={values.amount}
                onChange={(e) => handleChangeValue("amount", e.target.value)}
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

export default GstBillForm;
