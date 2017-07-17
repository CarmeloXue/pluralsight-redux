import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course,allAuthors,onSave,onChange,loading,errors})=>{
  return(
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      ></TextInput>

      <SelectInput
        name="authorId"
        label="AuthorId"
        value={course.authorId}
        defaultOption="Select Authors"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      ></SelectInput>

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      ></TextInput>

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      ></TextInput>

      <input
        type="submit"
        disabled={loading}
        value={loading?"Saving...":"Save"}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  )
}

CourseForm.propTypes = {
  course:PropTypes.object.isRequired,
  allAuthors:PropTypes.array.isRequired,
  onSave:PropTypes.func,
  onChange:PropTypes.func,
  loading:PropTypes.object,
  errors:PropTypes.object
}

export default CourseForm;

