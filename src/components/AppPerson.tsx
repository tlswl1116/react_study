import { useState } from "react";

interface PersonProps {
  name: string;
  title: string;
  mentor: {
    name: string | null;
    title: string | null;
  };
}

const AppPerson = () => {
  const [person, setPerson] = useState<PersonProps>({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "에이미",
      title: "시니어개발자",
    },
  });

  const changeMentor = ({ type }: { type: "name" | "title" }) => {
    const newMentor = prompt(`멘토 ${type === "name" ? "이름" : "타이틀"} 바꾸기`);

    setPerson((prev: PersonProps) => {
      const newMentorInfo = {
        ...prev.mentor,
        name: type === "name" ? newMentor : prev.mentor.name,
        title: type === "title" ? newMentor : prev.mentor.title,
      };

      return { ...prev, mentor: newMentorInfo };
    });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name} 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => changeMentor({ type: "name" })}>멘토 이름 바꾸기</button>
        <button onClick={() => changeMentor({ type: "title" })}>멘토 타이틀 바꾸기</button>
      </div>
    </div>
  );
};

export default AppPerson;
