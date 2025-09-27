import Course from "../models/CourseModel.js";

export const getCourse = async (req, res) => {
  const { keyword, category } = req.query;
  console.log("keyword, category", keyword, category);

  const titleFilter = keyword
    ? { title: { $regex: keyword, $options: "i" } }
    : {};
  console.log("titlefilter", titleFilter);

  // category filter
  const categoryFilter = category ? { category } : {};
  console.log("titlefilter", categoryFilter);

  try {
    // fetch the courses from the database
    const courses = await Course.find({ ...titleFilter })
      .populate("category", "name")
      .populate("instructor", "name");

    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: "Server error!" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    // fetch the courses from the database
    const course = await Course.findById(req.params.id)
      .populate("category", "name")
      .populate("instructor", "name");

    if (!course) {
      return res.status(404).json({ message: "Course not found!" });
    }

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: "Server error!" });
  }
};
