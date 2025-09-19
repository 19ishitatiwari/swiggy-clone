import { screen, render } from "@testing-library/react";
import RestaurantCard, {PopularRestaurantCard} from "../RestaurantCard";
import '@testing-library/jest-dom';
import MockData from "../mocks/ResCardMockData.json";

it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MockData} />);

    const nameElement = screen.getByText("Pizza Hut");

    expect(nameElement).toBeInTheDocument();
});

it("should test Promoted Restaurant Card", () => {

    const PromotedCard = PopularRestaurantCard(RestaurantCard);
    render(
        <PromotedCard resData={MockData} />
    );

    const promotedLabel = screen.getByText("Promoted");

    expect(promotedLabel).toBeInTheDocument();
});