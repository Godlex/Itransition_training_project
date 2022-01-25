using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quality_of_Life_changer.Data.Migrations
{
    public partial class addPropertyRange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                type: "nvarchar(80)",
                maxLength: 80,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
                oldType: "nvarchar(80)",
                oldMaxLength: 80);

            migrationBuilder.CreateIndex(
                name: "IX_Calendars_Url",
                table: "Calendars",
                column: "Url",
                unique: true);
        }
    }
}
