using Microsoft.EntityFrameworkCore;

namespace QuizAPI.Models
{
    public class QuizDbContext : DbContext
    {
        public QuizDbContext(DbContextOptions<QuizDbContext> contextOptions) : base (contextOptions)
        { }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }

    }
}
