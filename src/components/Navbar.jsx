export default function Navbar() {
  return (
    <div className="bg-beige">
      <div className="min-h-[180px] flex justify-between items-center w-[85%] m-auto">
        <div>LOGOGO</div>
        <div>nav &#187;</div>
        <div>Search</div>
        <div>
          <form action="/">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="w-44 h-44 accent-beige" />
            <label for="vehicle1"> I have a bike</label>
          </form>
        </div>
      </div>
    </div>
  );
}
