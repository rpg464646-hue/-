export type RoomType = 'vip' | 'suite' | 'standard';

export interface MahjongTable {
  id: string;
  number: string;
  name: string;
  roomType: RoomType;
  typeLabel: string;
  capacity: string;
  hourlyRate: number;
  status: 'available' | 'in_use' | 'reserved';
  estimatedAvailableTime?: string;
  features: string[];
  specs: {
    tableModel: string;
    tiles: string;
    ventilation: string;
    seating: string;
    entertainment?: string;
  };
  image: string;
}

export interface GamePost {
  id: string;
  title: string;
  hostName: string;
  gameType: '台麻16張' | '台麻16張快打' | '日麻四人東' | '港麻13張';
  stakes: string;
  ruleNotes: string[];
  targetPlayers: number;
  currentPlayers: number;
  startTime: string;
  roomName: string;
  isSmoking: boolean;
  signedUpUsers: string[];
  tag: string;
}

export interface TaiRule {
  id: string;
  name: string;
  tai: number;
  category: 'common' | 'patterns' | 'honors' | 'flowers' | 'rare';
  description: string;
  exclusiveWith?: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'hot' | 'snack' | 'tea' | 'cold_drink';
  categoryLabel: string;
  price: number;
  description: string;
  tags?: string[];
  popular?: boolean;
  prepTime: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  note?: string;
}

export interface BookingForm {
  tableId: string;
  date: string;
  timeSlot: string;
  durationHours: number;
  customerName: string;
  phone: string;
  lineId?: string;
  guestCount: number;
  specialRequests?: string;
  teaPreference?: string;
}
