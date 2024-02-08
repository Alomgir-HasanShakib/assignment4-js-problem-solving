// write function to calculates baker vai total income per day after per day const

function calculateMoney(ticketSale) {
  //   checking given number is a positive number
  if (ticketSale < 0) {
    return "Invalid Number";
  }
  //   calculate total cost of everyday

  const getManCost = 500;
  const TotalStaf = 8;
  const perDaystafCost = 50;
  const stafCost = TotalStaf * perDaystafCost;
  const totalStafCost = getManCost + stafCost;

  // calculte total ticket sells money and subsctract total cost and then return perday Income after cost

  const perTicketPrice = 120;
  const totalTicketSell = ticketSale;
  const totalTicketPrice = totalTicketSell * perTicketPrice;

  const perDaySave = totalTicketPrice - totalStafCost;

  return perDaySave;
}

