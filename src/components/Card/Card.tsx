interface ICard {
  id: number;
  titulo: string;
  paragraph: string;
  details: string;
}

export const Cards = ({ id, titulo, paragraph, details }: ICard) => {
  console.log(id);
  return (
      <div>
            <h1>
              {titulo} {id}
            </h1>
            <p>{paragraph}</p>
            <p>{details}</p>
      </div>
  );
};
