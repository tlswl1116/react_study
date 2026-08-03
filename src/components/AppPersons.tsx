import { useCallback, useEffect, useReducer } from "react";
import personReducer from "../reducer/person-reducer";
import { useImmer } from "use-immer";
import { Button } from "./Buttons";

export interface PersonProps {
  name: string;
  title: string;
  mentor: {
    name: string | null;
    title: string | null;
  }[];
}

const initialPerson: PersonProps = {
  name: "엘리",
  title: "개발자",
  mentor: [
    {
      name: "에이미",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};

const AppPersons = () => {
  //   const [person, setPerson] = useState<PersonProps>(initialPerson);
  const [people, updatePeople] = useImmer(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  useEffect(() => {
    console.log(people);
  }, [people]);

  const changeMentor = useCallback(({ target }: { target: "name" | "title" }) => {
    const prevName = prompt("누구를 변경할건가요?");
    const current = prompt(`멘토 ${target === "name" ? "이름" : "타이틀"} 바꾸기`);

    dispatch({ type: "updated", prev: prevName, current: current, target: target });
    updatePeople((prev) => {
      const mentor = prev.mentor.find((m) => m.name === prevName);
      if (!mentor) return;
      mentor.name = current;
    });
  }, []);

  const handleChangeMontorName = useCallback(() => {
    changeMentor({ target: "name" });
  }, [changeMentor]);

  const handleChangeMontorTitle = useCallback(() => {
    changeMentor({ target: "title" });
  }, [changeMentor]);

  const addMentor = useCallback(() => {
    const newMentorName = prompt("추가할 멘토 이름을 입력해주세요.");
    const newMentorTitle = prompt("추가할 멘토 정보를 입력해주세요.");

    dispatch({ type: "added", name: newMentorName, title: newMentorTitle });

    updatePeople((prev) => {
      prev.mentor.push({ name: newMentorName, title: newMentorTitle });
    });
  }, []);

  const removeMentor = useCallback(() => {
    const removeMentorName = prompt("삭제할 멘토 정보를 입력해주세요.");

    dispatch({ type: "remove", name: removeMentorName });
    updatePeople((prev) => {
      const index = person.mentor.findIndex((m) => m.name === removeMentorName);

      prev.mentor.splice(index, 1);
    });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name} 멘토는</p>
      <ul>
        {person.mentor.map((mentor, idx) => (
          <li key={idx}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
        <Button onClick={handleChangeMontorName} text="멘토 이름 바꾸기" />
        <Button onClick={handleChangeMontorTitle} text="멘토 타이틀 바꾸기" />
        <Button onClick={addMentor} text="멘토 추가" />
        <Button onClick={removeMentor} text="멘토 삭제" />
      </div>
    </div>
  );
};

export default AppPersons;
