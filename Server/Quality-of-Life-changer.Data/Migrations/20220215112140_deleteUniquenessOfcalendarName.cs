using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quality_of_Life_changer.Data.Migrations
{
    public partial class deleteUniquenessOfcalendarName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Calendars_CalendarName",
                table: "Calendars");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Calendars_CalendarName",
                table: "Calendars",
                column: "CalendarName",
                unique: true);
        }
    }
}
