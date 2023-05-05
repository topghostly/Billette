import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
// const Para = ({ children }) => {
//   return (
//     <motion.div
//       initial={{
//         x: 30,
//         opacity: 0,
//       }}
//       animate={{
//         x: 0,
//         opacity: 1,
//       }}
//       exit={{
//         x: -30,
//         opacity: 0,
//       }}
//       transition={{
//         duration: 0.5,
//       }}
//     >
//       <h2>{children.content}</h2>
//       <p>{children.author}</p>
//     </motion.div>
//   );
// };
function Slider() {
  const [numContent, setContent] = useState(0);
  const nextHandler = () => {
    if (numContent < 4) {
      setContent(numContent + 1);
    } else {
      setContent(0);
    }
  };
  const prevHandler = () => {
    if (numContent > 0) {
      setContent(numContent - 1);
    } else {
      setContent(4);
    }
  };

  const data = [
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur hvjkadipisicing elit. Fugit velit magnam corporis alias. Deserunt, repellendus mollitia est dolore quae accusamus ad! Nesciunt est sint harum commodi dolores provident saepe odit.",
      author: "Anthony McCopolo - CEO Mac and Cheese industry - 0",
      id: 0,
    },
    {
      content:
        "Lorem, ipsum dolor sit amet clbklonsectetur adipisicing elit. Fugit velit magnam corporis alias. Deserunt, repellendus mollitia est dolore quae accusamus ad! Nesciunt est sint harum commodi dolores provident saepe odit.",
      author: "Anthony McCopolo - CEO Mac and Cheese industry - 1",
      id: 1,
    },
    {
      content:
        "Lorem, ipsum klbldolor sit amet consectetur adipisicing elit. Fugit velit magnam corporis alias. Deserunt, repellendus mollitia est dolore quae accusamus ad! Nesciunt est sint harum commodi dolores provident saepe odit.",
      author: "Anthony McCopolo - CEO Mac and Cheese industry - 2",
      id: 2,
    },
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit magnam corporis alias. Deserunt, repellendus mollitia est dolore quae accusamus ad! Nesciunt est sint harum commodi dolores provident saepe odit.",
      author: "Anthony McCopolo - CEO Mac and Cheese industry - 3",
      id: 3,
    },
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit magnam ;orjfwoefcorporis alias. Deserunt, repellendus mollitia est dolore quae accusamus ad! Nesciunt est sint harum commodi dolores provident saepe odit.",
      author: "Anthony McCopolo - CEO Mac and Cheese industry - 4",
      id: 4,
    },
  ];
  const slideAnim = useAnimation();
  useEffect(() => {
    const animationFuction = async () => {
      await slideAnim.start({
        x: 10,
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      });
      await slideAnim.start({
        x: 0,
        opacity: 1,
      });
    };
    animationFuction();
  }, [numContent, slideAnim]);
  return (
    <Slide>
      <div className="container-sm flex-c">
        <p
          onClick={() => {
            prevHandler();
          }}
          className="controls"
        >
          prev
        </p>
        <div
          className="container-sm"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Textarea animate={slideAnim}>
            <h2>{data[numContent].content}</h2>
            <p>{data[numContent].author}</p>
          </Textarea>
        </div>
        <p
          onClick={() => {
            nextHandler();
          }}
          className="controls"
        >
          next
        </p>
      </div>
      <div className="new-controls">
        <p
          onClick={() => {
            prevHandler();
          }}
        >
          prev
        </p>
        <p
          onClick={() => {
            nextHandler();
          }}
          className="controls"
        >
          next
        </p>
      </div>
    </Slide>
  );
}
const Slide = styled.div`
  padding: 40px;
  padding-top: 50px;
  max-width: 100vw;
  overflow-x: hidden;
  /* min-height: 60vw; */

  .new-controls {
    display: none;
  }
  .flex-c {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 470px) {
      .controls {
        display: none;
      }
    }
  }
  @media screen and (max-width: 470px) {
    .new-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const Textarea = styled(motion.div)`
  width: 700px;
  text-align: center;
  h2 {
    color: #303030;
  }
  p {
    color: #16ce72;
    font-weight: bolder;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
  @media screen and (max-width: 700px) {
    width: 350px;
    h2 {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 300px;
    h2 {
      font-size: 23px;
    }
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 470px) {
    width: 270px;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 13px;
      font-weight: bolder;
    }
  }

  h2 {
    font-weight: bolder;
  }
  p {
    margin-top: 30px;
  }
`;
export default Slider;
