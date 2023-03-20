/// Type representing a single card on the rotating billboard.

export interface BillBoardEntry {
  title: string;
  thumbnail: string;
  blurb: string;
}

export interface BillBoardGroup {
  entries: BillBoardEntry[];
}

export interface BillBoardProps {
  groups: BillBoardGroup[];
}

export default function BillBoard(props: BillBoardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black">
      <p>Billboard</p>
      {props.groups.map((group) => renderGroup(group))}
    </div>
  );
}

function renderGroup(group: BillBoardGroup) {
  return group.entries.map((entry) => renderEntry(entry));
}

function renderEntry(entry: BillBoardEntry) {
  return (
    <div className="flex flex-col">
      <p>{entry.title}</p>
      <p className="grow">image placeholder</p>
      <p>{entry.blurb}</p>
    </div>
  );
}
