using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quality_of_Life_changer.Data.Migrations
{
    public partial class caldarUniqField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Url",
                table: "Calendars",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "CalendarName",
                table: "Calendars",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Calendars_CalendarName",
                table: "Calendars",
                column: "CalendarName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Calendars_Url",
                table: "Calendars",
                column: "Url",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Calendars_CalendarName",
                table: "Calendars");

            migrationBuilder.DropIndex(
                name: "IX_Calendars_Url",
                table: "Calendars");

            migrationBuilder.AlterColumn<string>(
                name: "Url",
                table: "Calendars",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<string>(
                name: "CalendarName",
                table: "Calendars",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
