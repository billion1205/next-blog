function DarkTheme() {
    return (
        <style jsx global>{`
          :root {
            --background-color: black;
            --text-color: white;
            --link-color: rgb(228, 194, 92);
          }
        `}</style>
    );
}

export default DarkTheme;