type NameTagProps = {
  name: string;
};

const NameTag = ({ name }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
      </header>
      <p>{name}</p>
    </main>
  );
};

const Application = () => <NameTag name="Massoud" />;

export default Application;
