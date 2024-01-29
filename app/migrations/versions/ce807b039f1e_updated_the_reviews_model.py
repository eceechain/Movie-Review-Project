"""Updated the Reviews Model

Revision ID: ce807b039f1e
Revises: 4553e1c19211
Create Date: 2024-01-29 00:57:22.881320

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ce807b039f1e'
down_revision = '4553e1c19211'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.drop_column('comments')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('comments', sa.TEXT(), nullable=True))

    # ### end Alembic commands ###
