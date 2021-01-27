import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import http from "../../services/httpService";
import Input from "../components/input";
import { Container, SearchContainer, CardWrapper } from "./styledIndex";
import Search from "../../assets/svgs/search.svg";
import Card from "../components/card";

const Index = () => {
  const [products, setProducts] = useState({ product: "", data: [] });
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSearch = async () => {
    try {
      const { data } = await http.get("/search", {
        params: {
          query,
        },
      });

      setProducts(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const { data } = await http.get("/search", {
          params: {
            query: "",
          },
        });

        setProducts(data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getItems();
  }, []);

  return (
    <Container>
      <SearchContainer>
        <Input
          placeholder="search any product here but you will get only shoes in this mockup..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div onClick={handleSearch}>
          <img src={Search} alt="search logo" />
        </div>
      </SearchContainer>
      <CardWrapper>
        {products.data.map(({ asin, title, price, reviews, thumbnail }) => (
          <Card
            key={asin}
            label={`${title.substr(0, 35)}...`}
            description={`${reviews.rating} rating`}
            priceTag={`${price.current_price.toFixed(2)} ${price.currency}`}
            imgSrc={thumbnail}
            onClick={() => history.push(`/${products.product}/${asin}`)}
          />
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Index;
