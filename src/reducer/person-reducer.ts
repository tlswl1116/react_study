import type { PersonProps } from "../components/AppPersons";

type actionProps =
  | {
      type?: "updated";
      prev: string | null;
      current: string | null;
      target: "name" | "title";
    }
  | {
      type?: "added";
      name: string | null;
      title: string | null;
    }
  | {
      type?: "remove";
      name: string | null;
    };

export default function personReducer(person: PersonProps, action: actionProps): PersonProps {
  switch (action.type) {
    case "updated": {
      const { prev, current, target } = action;

      return {
        ...person,
        mentor: person?.mentor?.map((item) => {
          if (item.name === prev) {
            return {
              ...item,
              name: target === "name" ? current : item.name,
              title: target === "title" ? current : item.title,
            };
          } else {
            return item;
          }
        }),
      };
    }

    case "added": {
      const { name, title } = action;

      return {
        ...person,
        mentor: [
          ...person.mentor,
          {
            name: name,
            title: title,
          },
        ],
      };
    }

    case "remove": {
      const { name } = action;

      return {
        ...person,
        mentor: person?.mentor?.filter((item) => item.name !== name),
      };
    }

    default: {
      throw Error("알수없는 액션 타입이다:", action.type);
    }
  }
}
