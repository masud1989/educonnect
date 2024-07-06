import { Category } from "@/models/categoryModel";
import { Course } from "@/models/courseModel";
import { Module } from "@/models/moduleModel";
import { Testimonial } from "@/models/testimonialModel";
import { User } from "@/models/userModel";

export async function getCourses() {
  const courses = await Course.find({})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "modules",
      model: Module,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
    });
  return courses;
}
